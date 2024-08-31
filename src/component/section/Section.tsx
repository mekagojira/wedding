import { AppProps } from 'define/prop.tsx'

export function Section(
    props: AppProps & {
        container?: boolean
        style?: { [key: string]: string }
    },
) {
    return (
        <section
            style={props.style || {}}
            className={`w-screen ${props.container ? 'container mx-auto px-4 md:px-0' : ''}`}
        >
            {props.children}
        </section>
    )
}
