# Unit 01: First programs
## Lesson 01: The elements of programming

*Example: Heron's Method*

Programming is essentially the combination of:
- Algorithms: Step-by-step procedure to solve a problem.
- Heuristics: Step-by-step procedure to estimate the solution to a problem.
- Data Structures: The ways we structure data.
- Additionally, we need a programming language. Programming Language A way of communicating what we want the computer to do in a sensible way.

JavaScript: A high-level language. Semantics and Syntax

Example: *Heron's Method Heron's method is a heuristic for finding the square root of a number.*

Goal: Find the square root of some number `N` within some tolerance, `t`.

Guess the square root of `N: g (g > 0)`
Test if `g^2` is within `t` of `N`. `(|g^2 - N| < t)` -- If yes: return `g` (g is the answer) -- If no: modify your guess as: The average of `g` and `N` / g. (`(g + N / g) / 2)`. Repeat the test (Step #2).

Example: Find the square root of `30` within `0.01.`
1. Guess: `30 / 2 = 15`.
2. Is `15 * 15` within `0.01 of 30`?
3. New Guess: `(15 + 30 / 15) / 2 = 8.5`
4. Is `8.5 * 8.5` within `0.01 of 30`?
5. New Guess: `(8.5 + 30 / 8.5) / 2) = ???`....