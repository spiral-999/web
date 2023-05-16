const Temperatura = () =>{
    const celsiusParaFahrenheit = (celsius) => (celsius*9 + 160)/5
    const fahrenheitParaCelsius = (fahrenheit) => (fahrenheit-32)*(5/9)
    const kelvin = (kelvin) =>{
        const celsius = kelvin - 273
        const fahrenheit = (kelvin-273)*9/5+32
        return {celsius,fahrenheit}
    }
    const c = 50
    const f = 90
    const k = 100
    return(
        <div>
            <h1>A temperatura {c} celsius para fahrenheit é : {celsiusParaFahrenheit(c)}</h1>
            <h1>A temperatura {f} fahrenheit para celsius é : {fahrenheitParaCelsius(f)}</h1>
            <h1>A temperatura {k} kelvin em celsius é : {kelvin(k).celsius}</h1>
            <h1>A temperatura {k} kelvin em fahrenheit é : {kelvin(k).fahrenheit}</h1>
        </div>
    )
}
export default Temperatura