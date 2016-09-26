/**
 * Created by Elf on 30.08.2016.
 */
export default class WeatherUnitsConv {

    // Get units as a string or digit
    // convert to string convert format round it and return string XX format
    static fromCtoF(temp) {
        const tempNum = ( typeof temp === 'number' )? temp: +temp;

        return '' + Math.round(tempNum * 9 / 5 + 32);
    }

    static fromFtoC(temp) {
        const tempNum = ( typeof temp === 'number' )? temp: +temp;

        return '' + Math.round((tempNum - 32 ) * 5 / 9);
    }
}