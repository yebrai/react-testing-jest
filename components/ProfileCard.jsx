export function titleCase (text) {
    if (text === '') return ''
    const arr = text.split(' ')
    const result = []
    for (let elem of arr) {
        result.push(elem[0].toUpperCase() + elem.substring(1).toLowerCase())
    }
    return result.join(' ')
}

export function mayorDeEdad(age) {
    return (age >= 18) ? true : false ? (age < 0) : null
}


const ProfileCard = ({name, surname, age, description}) => {
    return <div></div>
}

export default ProfileCard