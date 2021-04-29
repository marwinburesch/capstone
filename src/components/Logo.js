import styles from "./Logo.module.css";

export default function Logo({ size }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={styles[size] || styles.s}
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z'
      />
    </svg>
  );
}
