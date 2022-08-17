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



```tsx
<input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick" />

const handleChange = (e) => { // Esto obtendra un error en el type del evento
    setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
    })
  }

```
### *Truco* para determinar el tipo de un evento

```tsx
<input onChange={(e) => {
    setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
    })
}} value={inputValues.nick} type="text" name="nick" placeholder="nick" />
// En el hover de la e nos determinara el tipo del dato que debemos utilizar

const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputValues({
        ...inputValues,
        [e.target.name]: e.target.value
    })
  }

```