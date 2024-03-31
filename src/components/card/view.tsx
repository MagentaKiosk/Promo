import style from './card.module.scss'


interface test {
    photo?: string
}

export const View = ({
    photo
}: test) => {

    return <form className={style.container}>
        <div className={style.image}>
            <label htmlFor="file" className={style.label}>
                <img />
            </label>
            <input id="file" type="file" 
                onChange={(e) => {
                    //  setPhoto(e.target.value)
                    //  console.log(photo)
                }}
            />
        </div>
        
        <div>
            <input className={style.name} type="text" placeholder="First Name" />
            <input type="text" placeholder="Title" />
            <input type="tel" 
                placeholder="Phone number" 
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                minLength={10}
                maxLength={10}
            />
        </div>
    </form>
}