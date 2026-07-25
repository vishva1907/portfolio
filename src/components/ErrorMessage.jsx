function ErrorMessage({ message, onRetry }) {
    return (
        <div className="error">
            <h2>Error</h2>

            <p>{message}</p>

            <button className="retry-btn" onClick={onRetry}>
                Retry
            </button>
        </div>
    );
}

export default ErrorMessage;