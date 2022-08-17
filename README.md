# REACT + TYPESCRIPT: Creando un proyecto desde cero y paso a paso (Tutorial en español)

https://www.youtube.com/watch?v=15VKbky2gB4&t=1s&ab_channel=midudev

```ts
interface Props {
    subs: Array<{        
        nick: string,
        avatar: string,
        subMonths: number,
        description?: string
    }>
}

// Primera
const List: React.FunciontalComponent<Props> = ({subs}) => {...
// Segunda
const List: React.FC<Props> = ({subs}) => {...
// Tercera
const List = ({subs}: Props) => {...
```