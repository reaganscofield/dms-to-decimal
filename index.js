function DMS2Decimal(degrees = 0, minutes = 0, seconds = 0, direction = 'N') {
    const directions = ['N', 'S', 'E', 'W'];
    if(!directions.includes(direction.toUpperCase())) return 0;
    if(!Number(minutes) || minutes < 0 || minutes > 59) return 0;
    if(!Number(seconds) || seconds < 0 || seconds > 59) return  0;
    if(!Number(degrees) || degrees < 0 || degrees > 180) return 0;
    
    let decimal = degrees + (minutes / 60) + (seconds / 3600);
    if (direction.toUpperCase() === 'S' || direction.toUpperCase() === 'W') decimal *= -1;
    return decimal;
}

function Decimal2DMS(decimal = 0.0, type = '') {
   let direction;
   if(type === 'latitude') decimal >= 0 ? direction = 'N' : direction = 'S';
   if(type === 'longitude') decimal >= 0 ? direction = 'E' : direction = 'W';

   const getAbsoluteValueOfDecimal = Math.abs(decimal);
   let degrees = Math.floor(getAbsoluteValueOfDecimal);
   let seconds = (getAbsoluteValueOfDecimal - degrees) * 3600;
   let minutes = Math.floor(seconds / 60);

   seconds = Math.floor(seconds - (minutes * 60));   
   const dms = `${degrees}°${minutes}'${seconds}"${direction}`;
   return dms;
}

module.exports = {
    Decimal2DMS: Decimal2DMS,
    DMS2Decimal: DMS2Decimal
}