import styles from "./LoadingSpinner.module.css";

const LoadingSpinner = () => (
    <div className={`${styles.spinnerContainer} container`} role="status" aria-live="polite">
        <div className={styles.loadingSpinner} />
        <span>Loading...</span>
    </div>
);

export default LoadingSpinner;