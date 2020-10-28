const determineNuyenPercentBonus = (type, percent) => type === 'standard' ? 0 : type === 'good feels' ? -Math.abs(percent) : percent

export default determineNuyenPercentBonus