import clsx from 'clsx'

export function SectionHeading({
  number,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'h2'> & { number: string }) {
  return (
    <h2
      className={clsx(
        className,
        'inline-flex items-center rounded-full px-4 py-1 text-green-600 ring-1 ring-inset ring-green-600',
        'text-md font-semibold sm:text-lg md:text-xl lg:text-2xl'
      )}
      {...props}
    >
      <span className="font-mono text-4xl" aria-hidden="true">
        {number.padStart(2, '0')}
      </span>
      <span className="ml-3 h-3.5 w-px bg-green-600/20" />
      <span className={clsx("ml-3 tracking-tight leading-tight",
        'text-md font-semibold sm:text-lg md:text-xl lg:text-2xl'
      )}>
        {children}
      </span>
    </h2>
  )
}
