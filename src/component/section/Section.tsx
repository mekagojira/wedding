import { AppProps } from 'define/prop.tsx'

export function Section(props: AppProps & { container?: boolean }) {
    return (
        <section
            className={`section ${props.container ? 'container mx-auto px-4 md:px-0' : ''}`}
        >
            {props.children}
        </section>
    )
}
