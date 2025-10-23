# Audit Implementation Command Documentation

The `audit_implement` command audits and evaluates the quality of an implementation carried out from a plan in `thoughts/shared/plans/`. Its goal is to assess whether the implementation followed the approved plan faithfully, met all success criteria, handled deviations correctly, and maintained code quality and verification discipline. The audit produces a structured feedback report that can be used to improve future implementation practices or correct discrepancies.

---

## Purpose

The `audit_implement` command ensures that implemented work adheres to **the approved plan’s intent, success criteria, and code quality standards**. It functions as a **post-implementation quality and integrity review**, verifying that execution aligned with both the letter and spirit of the plan.

Specifically, it:
- Evaluates **plan fidelity** – Did the implementation follow what was specified?
- Checks **technical correctness** and **code quality**
- Verifies that **success criteria were met and validated**
- Detects **improperly handled deviations or omissions**
- Ensures **clear documentation of decisions, updates, and verification steps**
- Identifies **risks, regressions, or incomplete follow-through**

---

## Initial Response

When `/audit_implement` is invoked:

1. **If a plan path is provided:**
   - Read the plan file completely (no limit/offset).
   - Read related tickets and all files mentioned in the plan.
   - Identify completed, in-progress, and unchecked sections.
   - Begin the audit process.

2. **If no plan path is provided**, respond with:
```
I'll help you audit the implementation of a completed plan for quality, completeness, and adherence to success criteria.

Please provide:
1. The path to the implemented plan (e.g. `thoughts/shared/plans/2025-01-08-ENG-1478-parent-child-tracking.md`)
2. Any specific concerns you'd like me to focus on (e.g., success criteria validation, phase adherence, code quality)
3. Optionally, the related ticket or linked commits for context

Once provided, I’ll analyze the implementation, check for deviations or errors, and produce a structured audit summary that identifies improvements and next actions.
```

---

## Process Steps

### Step 1: Context Gathering

1. **Read the provided plan fully**:
   - Note all phases, success criteria, and checked items.
   - Identify any partially completed or skipped steps.

2. **Read all related materials**:
   - The original ticket file.
   - Any relevant commit references, code diffs, or linked PR notes.
   - Source files listed in the plan (read them completely).

3. **Spawn parallel sub-tasks** using your available agents:

| Goal | Agent | Example Use |
|------|--------|-------------|
| Verify implemented file changes | `codebase-locator` | Locate modified files and confirm they correspond to plan references. |
| Check correctness of implementation | `codebase-analyzer` | Verify that code changes align with the plan’s described modifications and success criteria. |
| Identify adherence to coding patterns | `codebase-pattern-finder` | Compare new code against established patterns and conventions. |
| Locate related planning or context documents | `thoughts-locator` | Retrieve related plans or tickets to ensure consistency across documents. |
| Analyze reasoning consistency | `thoughts-analyzer` | Ensure implementation decisions match documented reasoning and intent. |
| Validate referenced tools or frameworks | `web-search-researcher` | Confirm that used dependencies, APIs, or commands are current and valid. |

Each agent should:
- Reference specific file paths and lines.
- Identify mismatches between plan intent and implementation.
- Suggest corrective or preventative measures.

---

### Step 2: Evaluation Framework

Each implementation is evaluated across **six quality dimensions**, reflecting both technical and procedural integrity:

| Dimension | Focus | Common Issues | Severity Levels |
|------------|--------|---------------|-----------------|
| **Plan Fidelity** | Faithfulness to plan phases and scope | Deviations, skipped steps, or undocumented changes | Moderate–Critical |
| **Technical Accuracy** | Correctness of code, syntax, and logic | Bugs, broken references, regressions | Moderate–Critical |
| **Verification Completeness** | Fulfillment of success criteria and testing | Unverified criteria, missing tests | Minor–Critical |
| **Documentation Quality** | Communication of deviations, outcomes, and fixes | Missing explanations, unclear progress notes | Minor–Moderate |
| **Code Quality & Style** | Adherence to conventions and maintainability | Style drift, duplicate logic, weak abstractions | Minor–Moderate |
| **Change Management** | Proper marking of completion and updates | Missing checkboxes, incomplete todos | Minor–Moderate |

---

### Step 3: Audit Output Format

Audit results are compiled into a standardized markdown report:

````markdown
# [Plan Title] – Implementation Audit Report

## Overview
This audit reviews the implementation of `thoughts/shared/plans/YYYY-MM-DD-ENG-XXXX-description.md` for adherence to plan intent, technical accuracy, verification completeness, and code quality.

---

## Summary Evaluation
| Category | Rating | Summary |
|-----------|---------|----------|
| Plan Fidelity | ✅ / ⚠️ / ❌ | [Comment] |
| Technical Accuracy | ✅ / ⚠️ / ❌ | [Comment] |
| Verification Completeness | ✅ / ⚠️ / ❌ | [Comment] |
| Documentation Quality | ✅ / ⚠️ / ❌ | [Comment] |
| Code Quality & Style | ✅ / ⚠️ / ❌ | [Comment] |
| Change Management | ✅ / ⚠️ / ❌ | [Comment] |

---

## Detected Issues

### Plan Fidelity
- [ ] Phase 2 implementation deviated from expected API structure without explanation.
- [ ] Unchecked success criteria despite completion.

### Technical Accuracy
- [ ] Detected potential logic regression in `src/service/metrics.ts`.

### Verification Completeness
- [ ] No evidence of integration test run for updated endpoints.

### Documentation Quality
- [ ] Deviation explanations missing in plan file comments.

### Code Quality & Style
- [ ] Inconsistent function naming and missing JSDoc headers.

### Change Management
- [ ] Progress checkboxes partially updated; phase completion unclear.

---

## Recommendations

### Priority Fixes (Critical)
1. [ ] Address logic mismatch in `metrics.ts`.
2. [ ] Add missing test evidence for verification criteria.

### Suggested Improvements (Moderate)
1. [ ] Update plan file with deviation rationale.
2. [ ] Run and log integration test results.

### Optional Enhancements (Minor)
1. [ ] Refactor repeated logic patterns for maintainability.
2. [ ] Ensure all success criteria are explicitly marked verified.

---

## Next Steps
- Save audit as `thoughts/shared/plans/audits/YYYY-MM-DD-ENG-XXXX-implementation-audit.md`
   - Format: `YYYY-MM-DD-ENG-XXXX-description-implementation-audit.md` where:
     - YYYY-MM-DD is today's date
     - ENG-XXXX is the ticket number (omit if none)
     - description matches the implemented plan
   - Examples:
     - With ticket: `2025-01-08-ENG-1478-parent-child-tracking-implementation-audit.md`
     - Without ticket: `2025-01-08-improve-error-handling-implementation-audit.md`
- Communicate findings to stakeholders or run `/implement_plan refine based on audit` for corrective follow-up.

---

## Metadata
- **Audited Plan:** `thoughts/shared/plans/YYYY-MM-DD-ENG-XXXX-description.md`
- **Audit Date:** YYYY-MM-DD
- **Auditor:** System (`/audit_implement`)
- **Next Step:** `/implement_plan refine based on audit`
````

---

### Step 4: Feedback Loop

Once the audit is complete:
1. Save report to `thoughts/shared/plans/audits/YYYY-MM-DD-ENG-XXXX-description-implementation-audit.md`.
2. Present a summary to the user:
   ```
   I've completed the implementation audit for:
   `thoughts/shared/plans/2025-01-08-ENG-1478-parent-child-tracking.md`

   Summary:
   - Plan Fidelity: ⚠️ Deviation in Phase 2
   - Technical Accuracy: ✅
   - Verification Completeness: ⚠️ Missing integration test
   - Documentation Quality: ⚠️ Incomplete deviation explanation
   - Code Quality: ✅
   - Change Management: ⚠️ Checkmarks partially missing

   Full audit saved at:
   `thoughts/shared/plans/audits/2025-01-08-ENG-1478-parent-child-tracking-implementation-audit.md`

   Would you like me to trigger `/implement_plan refine based on audit` to correct these findings?
   ```

---

## Audit Guidelines

1. **Be Objective and Evidence-Based** – Base all findings on actual code and plan comparison.  
2. **Prioritize by Impact** – Focus first on deviations that affect correctness or verification.  
3. **Be Constructive** – Each issue should have a clear corrective action.  
4. **Maintain Traceability** – Reference affected files, lines, and plan sections.  
5. **No Open Questions in Final Audit**
   - If unclear implementation behavior is found, flag it as “needs clarification.”  
   - Do not finalize the audit with unverified assumptions.  
6. **Be Interactive**
   - Engage in dialogue before finalizing the audit.  
   - Confirm findings with implementers when context is unclear.  
   - Treat audits as iterative quality improvement steps.

---

## Example Interaction Flow

```
User: /audit_implement thoughts/shared/plans/2025-01-08-ENG-1478-parent-child-tracking.md
Assistant: Let me read the plan and related implementation fully first...

[Reads plan and code files]

Summary:
- Plan Fidelity: ⚠️ Deviated API route naming
- Technical Accuracy: ✅
- Verification Completeness: ⚠️ Integration tests missing
- Documentation Quality: ⚠️ No explanation for skipped criteria
- Code Quality: ✅
- Change Management: ⚠️ Checkboxes incomplete

Full audit saved at:
`thoughts/shared/plans/audits/2025-01-08-ENG-1478-parent-child-tracking-implementation-audit.md`
Would you like me to run `/implement_plan refine based on audit` to address these issues?
```

