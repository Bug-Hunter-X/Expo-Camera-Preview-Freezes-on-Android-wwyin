# Expo Camera Preview Freeze on Android

This repository demonstrates a bug where the Expo Camera preview freezes on some Android devices. The issue is intermittent and doesn't occur consistently.  The `bug.js` file contains the problematic code, while `bugSolution.js` offers a potential workaround.

**Steps to Reproduce:**
1. Clone this repository.
2. Run the app on an affected Android device.
3. Observe the camera preview. It might freeze after some time.

**Workaround:**
The `bugSolution.js` file provides a possible solution. This involves implementing a mechanism to frequently restart the camera preview or using a different camera library if the issue persists.

**Note:** This bug's sporadic nature makes it difficult to pinpoint the exact cause.  The provided solution is a workaround, not a definitive fix.