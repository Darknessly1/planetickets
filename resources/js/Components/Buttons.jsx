export default function Buttons({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                ` m-3 items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-blue-500 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'    
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
