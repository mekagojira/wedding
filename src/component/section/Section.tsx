import { AppProps } from 'define/prop.tsx'

export function Section(props: AppProps) {
    return (
        <div className="section">
            <div className="container mx-auto px-4 md:px-0">
                {props.children}
            </div>
        </div>
    )
}
