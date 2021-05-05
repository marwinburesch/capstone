import "./Card.css";

export default function Card({ name, text, displayIcon }) {
  return (
    <article className='cardFrame'>
      <h2 className='headline'>
        Hello, my name is <span className='nameTag'>{name}</span>
      </h2>
      <p className='paragraph'>{text}</p>
      {displayIcon && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='iconReadMore'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      )}
    </article>
  );
}
