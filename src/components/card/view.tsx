import style from './card.module.scss'


interface test {
    photo?: string
    photoChange?: any
}

export const View = ({
    photo,
    photoChange
}: test) => {

    return <form className={style.container}>
        <div className={style.image}>
            <label htmlFor="file">
                <img src="" />
            </label>
            <input id="file" type="file" 
                onChange={(e) => photoChange(e)}
            />
        </div>
        
        <div className={style.fields}>
            <div className={style.wrapper}>
                <label htmlFor="name" className={style.label} />
                <input id="name" className={style.name} type="text" placeholder="First Name" />
            </div>
            <div className={style.wrapper}>
                <input type="text" placeholder="Title" />
            </div>
            <div className={style.wrapper}>
                <input type="tel" 
                    placeholder="Phone number" 
                    pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                    minLength={10}
                    maxLength={10}
                />
            </div>
        </div>
    </form>
}