# Audit Plan Command Documentation

The `audit_plan` command audits and evaluates the quality of an implementation plan created by the `create_plan` command. Its goal is to identify inconsistencies, omissions, unclear reasoning, or technical errors, then produce a structured feedback document that can be returned to `create_plan` for refinement.

---

## Purpose

The `audit_plan` command ensures every implementation plan meets high standards of **clarity, correctness, completeness, and feasibility**. It acts as a peer-review mechanism before final approval or execution.

Specifically, it:
- Detects **logical or technical flaws** in the plan
- Evaluates **coverage and completeness** relative to requirements
- Checks for **missing or incorrect sections**
- Highlights **ambiguities, scope creep, or open questions**
- Suggests **improvements** and provides **structured feedback**

The resulting audit summary is meant to be **looped back** into `/create_plan` for plan revision.

---

## Initial Response

When `/audit_plan` is invoked:

1. **If a plan file path is provided:**
   - Immediately read the plan file **in full** (no limit/offset).
   - Begin the audit process.

2. **If no file path is provided**, respond with:
```
I'll help you audit an implementation plan for accuracy, completeness, and quality.

Please provide:
1. The file path of the plan to audit (e.g. `thoughts/shared/plans/2025-01-08-ENG-1478-parent-child-tracking.md`)
2. Any specific concerns you’d like me to focus on (e.g., completeness, technical correctness, clarity, or structure)
3. Optionally, the related ticket file for context

Once provided, I’ll analyze the plan in depth, identify any errors or weak points, and produce a structured audit summary that can be sent back to `/create_plan` for revision.
```

---

## Process Steps

### Step 1: Context Gathering

1. **Fully read the provided plan file** to confirm all sections are present.
2. **If related tickets or research docs are provided**, read those to cross-check.
3. **Spawn parallel sub-tasks** using only your available agents:

| Goal | Agent | Example Use |
|------|--------|--------------|
| Verify file and path references | `codebase-locator` | Check that all files referenced in the plan exist. |
| Check code or command correctness | `codebase-analyzer` | Verify that referenced APIs, commands, or patterns are valid. |
| Identify conventional alignment | `codebase-pattern-finder` | Compare proposed implementations with established patterns. |
| Find related prior thoughts or plans | `thoughts-locator` | Locate related tickets, plans, or research docs. |
| Analyze related documents | `thoughts-analyzer` | Detect inconsistencies or contradictions with prior reasoning. |
| Validate external terms or syntax | `web-search-researcher` | Verify accuracy of external technologies, commands, or terminology. |

Each agent should:
- Reference specific lines or sections of the plan.
- Provide reasoning for detected issues.
- Suggest targeted corrections.

---

### Step 2: Evaluation Framework

Each plan is assessed across **five quality dimensions**:

| Dimension | Focus | Common Issues | Severity Levels |
|------------|--------|---------------|-----------------|
| **Structure** | Section completeness, clarity, formatting | Missing or mislabeled sections, unclear phasing | Minor–Critical |
| **Accuracy** | Technical correctness, feasibility | Wrong paths, unrealistic commands | Moderate–Critical |
| **Completeness** | Coverage of requirements and dependencies | Missing phases, unhandled edge cases | Moderate–Critical |
| **Clarity** | Communication quality, ambiguity | Vague descriptions, unclear goals | Minor–Moderate |
| **Verifiability** | Testability, measurable success criteria | Missing tests or metrics | Moderate–Critical |

---

### Step 3: Audit Output Format

Audit results are compiled into a standardized markdown report:

````markdown
# [Plan Title] – Audit Report

## Overview
This audit reviews the plan at `thoughts/shared/plans/YYYY-MM-DD-ENG-XXXX-description.md` for accuracy, completeness, and structure.

---

## Summary Evaluation
| Category | Rating | Summary |
|-----------|---------|----------|
| Structure | ✅ / ⚠️ / ❌ | [Comment] |
| Accuracy | ✅ / ⚠️ / ❌ | [Comment] |
| Completeness | ✅ / ⚠️ / ❌ | [Comment] |
| Clarity | ✅ / ⚠️ / ❌ | [Comment] |
| Verifiability | ✅ / ⚠️ / ❌ | [Comment] |

---

## Detected Issues

### Structural Issues
- [ ] Missing section(s): [name]

### Accuracy Issues
- [ ] Incorrect command or path reference.

### Completeness Issues
- [ ] Missing rollback or migration plan.

### Clarity Issues
- [ ] Ambiguous success criteria.

### Verifiability Issues
- [ ] Missing automated tests or measurable metrics.

---

## Recommendations

### Priority Fixes (Critical)
1. [ ] Add rollback or migration details.
2. [ ] Verify command validity.

### Suggested Improvements (Moderate)
1. [ ] Clarify testing criteria.
2. [ ] Align with established coding patterns.

### Optional Enhancements (Minor)
1. [ ] Improve formatting consistency.

---

## Next Steps
- Save audit as `thoughts/shared/plans/audits/YYYY-MM-DD-ENG-XXXX-plan-audit.md`
   - Format: `YYYY-MM-DD-ENG-XXXX-description-plan-audit.md` where:
     - YYYY-MM-DD is today's date
     - ENG-XXXX is the ticket number (omit if no ticket)
     - description is a brief kebab-case description from the original plan doc
   - Examples:
     - With ticket: `2025-01-08-ENG-1478-parent-child-tracking-plan-audit.md`
     - Without ticket: `2025-01-08-improve-error-handling-plan-audit.md`
- Run `/create_plan refine based on audit` to generate an updated plan.

---

## Metadata
- **Audited File:** `thoughts/shared/plans/YYYY-MM-DD-ENG-XXXX-description.md`
- **Audit Date:** YYYY-MM-DD
- **Auditor:** System (`/audit_plan`)
- **Next Step:** `/create_plan refine based on audit`
````

---

### Step 4: Feedback Loop

Once the audit is complete:
1. Save report to `thoughts/shared/plans/audits/YYYY-MM-DD-ENG-XXXX-description-plan-audit.md`.
2. Present summary and invite the user to run:
   ```
   /create_plan refine based on audit thoughts/shared/plans/audits/YYYY-MM-DD-ENG-XXXX-description-plan-audit.md
   ```

---

## Audit Guidelines

1. **Be Critical but Constructive** – aim for actionable recommendations.
2. **Base findings on verifiable evidence.**
3. **Prioritize by severity.**
4. **Maintain traceability** – reference related tickets or research docs.
5. **No Open Questions in Final Audit**
   - If the audit identifies unclear logic or missing context, mark it as a required clarification.
   - Do not finalize the audit with unresolved critical findings.
6. **Be Interactive**
   - Engage collaboratively when clarifying findings.
   - Encourage user feedback before finalizing the audit.
   - Treat the audit as part of an iterative refinement loop.

---

## Example Interaction Flow

```
User: /audit_plan thoughts/shared/plans/2025-01-08-ENG-1478-parent-child-tracking.md
Assistant: Let me read that plan fully first...

[Reads file]

Summary:
- Structure: ✅ All sections present
- Accuracy: ⚠️ One invalid command
- Completeness: ⚠️ No rollback plan
- Clarity: ✅
- Verifiability: ⚠️ Missing test criteria

Full audit saved at `thoughts/shared/plans/audits/2025-01-08-ENG-1478-description-plan-audit.md`
Would you like me to send this audit summary to `/create_plan` for refinement?
```