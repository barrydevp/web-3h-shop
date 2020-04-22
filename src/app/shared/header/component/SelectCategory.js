import React, {useMemo} from 'react'
import PropTypes from 'prop-types'

function SelectCategory(props) {
    const rootCategories = useMemo(() => [{
        _id: 0,
        name: 'Danh mục sản phẩm'
    }, ...props.rootCategories], [props.rootCategories])
    const selectedValue = props.selectedValue

    return (
        <div className="SelectCategory col-0 col-md-4 category-select float-left">
            <select className="d-none d-md-block col-md-4 browser-default nice-select-menu" value={selectedValue}
                    onChange={(event) => props.onSetQueryProduct({category_id: event.target.value})}>
                {rootCategories && rootCategories.map(cat => {
                    return <option key={cat.name} value={cat._id}>{cat.name}</option>
                })}
            </select>
        </div>
    )
}

SelectCategory.propTypes = {
    rootCategories: PropTypes.array.isRequired,
    selectedValue:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    onSetQueryProduct: PropTypes.func.isRequired,
}

export default SelectCategory
