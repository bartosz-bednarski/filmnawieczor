import styles from './filterInput.module.scss'
export interface FilterInputPropsType{
    type:'number',
    placeholder:string,
    min?:number,
    max?:number,
    value:number|string,
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void,
    label:string,
    error:boolean
}

const FilterInput = ({type,placeholder,min,max,value,onChange,label,error}:FilterInputPropsType) =>{

    return (
        <div className={styles.box}>
            <input className={error?styles.error:""} placeholder={placeholder} type={type} value={value} min={min} max={max} onChange={(onChange)}></input>
            <label className={error?styles.error:""}>{label}</label>
        </div>
    )
}

export default FilterInput