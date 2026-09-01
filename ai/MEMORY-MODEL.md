# AI Memory Model

## Standard memory
General knowledge that may apply across projects or conversations.

## Project-sequential memory
Project-specific context that must remain connected across development stages:
- Current stage
- Approved requirements
- Approved UX/UI
- Architecture decisions
- Completed milestones
- Known issues
- Pending tasks

Keep project-sequential memory in project files, Git history, issues/tasks and the codebase rather than relying only on chat memory.

## File roles
/docs = requirements and design decisions
/ai = AI instructions, context and project state
/src = application source code
/tests = tests
/database = schema/migrations if needed
/scripts = project scripts
