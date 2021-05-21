function DMS2Decimal(degrees = 0, minutes = 0, seconds = 0, direction = 'N') {
    const directions = ['N', 'S', 'E', 'W'];
    if(!directions.includes(direction.toLocaleUpperCase())) return false;
    if(!Number(minutes) || minutes < 0 || minutes > 59) return false;
    if(!Number(seconds) || seconds < 0 || seconds > 59) return false;
    if(!Number(degrees) || degrees < 0 || degrees > 180) return false;
    
    let decimal = degrees + (minutes / 60) + (seconds / 3600);
    if (direction.toLocaleUpperCase() === 'S' || direction.toLocaleUpperCase() === 'W') decimal *= -1;
    return decimal;
}

module.exports = (degrees = 0, minutes = 0, seconds = 0, direction = 'N') => {
    return DMS2Decimal(degrees = 0, minutes = 0, seconds = 0, direction = 'N');
}