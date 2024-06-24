import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type }) {
    const base =
        'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-stone-300 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-stone-400 text-sm ';

    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4',
        small: base + ' px-4 py-2 md:px-4 md:py-2 text-xs',
        secondary:
            'text-sm inline-block rounded-full font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-stone-300 disabled:cursor-not-allowed disabled:bg-stone-500 disabled:text-stone-400 border-2 border-stone-300 px-4 py-3 md:px-6 md:py-4',
    };

    if (to)
        return (
            <Link className={styles[type]} to={to}>
                {children}
            </Link>
        );

    return (
        <button className={styles[type]} disabled={disabled}>
            {children}
        </button>
    );
}
