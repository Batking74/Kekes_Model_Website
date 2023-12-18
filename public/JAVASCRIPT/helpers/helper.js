export const date = new Date();

// Handles Error Messages and Logs them
export function handleAndLogError(functionName, error) {
    console.error(`Error in: ${functionName} function: ${error.message}`);
    throw error;
}