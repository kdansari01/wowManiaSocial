const BASE_URL = 'http://localhost:8000/'

export const METHODS = {
    POST:'POST',
    GET:'GET',
    DELETE:'DELETE'
}

export const customFetch = async (options = {})=>{
    const { method = METHODS.GET, body, isPrivate = false, url } = options

    const token = localStorage.getItem('token')

    const newBody = {...( method === METHODS.POST && {
        body:JSON.stringify(body)
    })}

    const newOption = {
        ...newBody,
        method,
        headers:{
            'Content-Type': 'application/json',
            Authorization: isPrivate ? `Bearer ${token}` : null
        },
    }

        const response = await fetch(`${BASE_URL}${url}`, newOption)
        const data = await response.json()
        if(response.status===401){
            localStorage.clear()
            window.location.reload()
            window.open("/login", self)
        }
        if(response.status === 200){
            return data
        }
        throw new Error(data.message, {cause:data.message})
}
