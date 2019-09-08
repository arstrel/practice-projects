import React from 'react';
import  PropTypes  from 'prop-types'
import {MdTerrain} from 'react-icons/md'
import {TiSnowFlake} from 'react-icons/ti'

const SkiDayRow = ({ resort, date, powder, backcountry, onRemoveDay=f=>f }) =>
    <tr onDoubleClick={() => onRemoveDay(date)}>
        <td>
            {date}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(powder) ? <TiSnowFlake /> : null }
        </td>
        <td>
            {(backcountry) ? <MdTerrain /> : null }
        </td>
    </tr>

SkiDayRow.propTypes = {
    resort: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    powder: PropTypes.bool,
    backcountry: PropTypes.bool,
    onRemoveDay: PropTypes.func
}

export default SkiDayRow