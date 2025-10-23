# Debug

You are tasked with helping debug issues during manual testing or implementation. This command allows you to investigate problems by examining logs, service status, and git history without editing files. Think of this as a way to bootstrap a debugging session without using the primary window's context.

## Initial Response

When invoked WITH a plan/ticket file:
```
I'll help debug issues with [file name]. Let me understand the current state.

What specific problem are you encountering?
- What were you trying to test/implement?
- What went wrong?
- Any error messages?

I'll investigate the logs, services, and git state to help figure out what's happening.
```

When invoked WITHOUT parameters:
```
I'll help debug your current issue.

Please describe what's going wrong:
- What are you working on?
- What specific problem occurred?
- When did it last work?

I can investigate logs, service state, and recent changes to help identify the issue.
```

---

## Environment Information

You have access to these key locations and tools:

**Logs**:
- **AWS CloudWatch Logs**:  
  Use AWS CLI to inspect logs for Lambda functions, API Gateway, or backend services:  
  ```bash
  aws logs describe-log-groups
  aws logs tail /aws/lambda/<function-name> --since 1h
  aws logs get-log-events --log-group-name /aws/lambda/<function-name> --log-stream-name <stream>
  ```

- **Next.js Web App Logs**:  
  Development: output in the terminal where `npm run dev` or `next dev` is running.  
  Production (Vercel, Amplify, or custom server): use hosting provider’s logs (CloudWatch, Vercel dashboard, etc.).

- **Expo React Native Logs**:  
  Use Expo CLI for local dev:  
  ```bash
  npx expo start --clear
  ```  
  View logs in Metro bundler or device/emulator console.  
  For production builds, check logs via EAS dashboard, Xcode console (iOS), or Android logcat.

**DynamoDB** (if applicable):
- Inspect data/state with AWS CLI:  
  ```bash
  aws dynamodb scan --table-name <table-name> --max-items 5
  aws dynamodb describe-table --table-name <table-name>
  ```

**Git State**:
- Check current branch, recent commits, uncommitted changes.

**Service Status**:
- Verify running processes via `ps aux | grep <service>` (local dev).
- Check deployed service health endpoints (API Gateway, Amplify hosting, etc.).
- For containerized services: `docker ps`.

---

## Process Steps

### Step 1: Understand the Problem

After the user describes the issue:

1. **Read any provided context** (plan or ticket file).  
2. **Quick state check**:
   - Current git branch and recent commits
   - Any uncommitted changes
   - When the issue started occurring

---

### Step 2: Investigate the Issue

Spawn parallel Task agents for efficient investigation:

```
Task 1 - Check Recent Logs:
- AWS Lambda/API logs via CloudWatch
- Next.js build/runtime logs (local or provider)
- Expo/React Native logs (Metro bundler, emulator, device console)
- Look for stack traces, repeated errors, or failed API calls
Return: Key errors/warnings with timestamps
```

```
Task 2 - DynamoDB State (if relevant):
1. Scan relevant tables for recent entries
2. Describe schema with aws dynamodb describe-table
3. Look for anomalies or missing records
Return: Relevant findings from DynamoDB
```

```
Task 3 - Git and File State:
1. Check git status and current branch
2. Look at recent commits: git log --oneline -10
3. Check uncommitted changes: git diff
4. Verify expected files exist
Return: Git state and any file issues
```

---

### Step 3: Present Findings

Based on the investigation, present a focused debug report:

```markdown
## Debug Report

### What's Wrong
[Clear statement of the issue based on evidence]

### Evidence Found

**From Logs**:
- [Error/warning with timestamp]
- [Pattern or repeated issue]

**From DynamoDB (if used)**:
```bash
# Relevant CLI query and result
```
[Finding from database]

**From Git/Files**:
- [Recent changes that might be related]
- [File state issues]

### Root Cause
[Most likely explanation based on evidence]

### Next Steps

1. **Try This First**:
   ```bash
   [Specific command or action]
   ```

2. **If That Doesn't Work**:
   - Restart affected services (Lambda/API, Next.js dev server, Expo app)
   - Re-deploy or rebuild as needed
   - Enable debug/verbose logging in the failing component
```

---

## Important Notes

- **Focus on manual testing scenarios** - This is for debugging during implementation
- **Always require problem description** - Can't debug without knowing what's wrong
- **Logs are primary source of truth** - Use AWS CloudWatch, Next.js, and Expo logs depending on service type
- **Guide back to user** - Some issues (device-specific, provider-internal) may be outside reach
- **No file editing** - Pure investigation only

---

## Quick Reference

**AWS CloudWatch Logs**:
```bash
aws logs describe-log-groups
aws logs tail /aws/lambda/<function-name> --since 1h
```

**DynamoDB**:
```bash
aws dynamodb scan --table-name <table-name> --max-items 5
aws dynamodb describe-table --table-name <table-name>
```

**Next.js**:
```bash
npm run dev
npm run build && npm start
```

**Expo React Native**:
```bash
npx expo start --clear
adb logcat      # Android logs
xcrun simctl    # iOS simulator logs
```

**Git State**:
```bash
git status
git log --oneline -10
git diff
```
