import React from 'react'

interface DatesProps {
    children: React.ReactNode;
}

const Dates: React.FC<DatesProps> = ({children}) => {
    return (
        <div className="dates">
            <div className="dates-header">
                <div className="dates-heading">
                    <h3>Шаг 1. Даты пребывания</h3>
                    <p>Укажите предпочтительное количество попутчиков, которых
                        вы хотели бы позвать в поездку, и ее предполагаемую длительность.</p>
                </div>
                {children}
            </div>
        </div>
    );
}
export default Dates;
