# React useEffect Hook Missing Return Statement

This example demonstrates a common error in React applications: forgetting to include a return statement in a `useEffect` hook that performs cleanup.  The missing return statement can lead to memory leaks and other unexpected behavior.

The `bug.js` file contains the buggy code.  The `bugSolution.js` file shows the corrected version.

This is particularly important when dealing with timers, event listeners, or subscriptions. Without a cleanup function, these resources will not be released properly when the component is unmounted, leading to potential problems.