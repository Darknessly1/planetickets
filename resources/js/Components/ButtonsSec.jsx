export default function ButtonsSec({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center m-2 bg-black border border-transparent rounded-md font-semibold text-xs text-black  tracking-widest hover:bg-blue-500 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${disabled && 'opacity-25'} ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
