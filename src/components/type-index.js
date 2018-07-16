import React from 'react'
import PropTypes from 'prop-types'
import templates from './index-templates'
import Pagination from 'components/pagination'

const renderPagination = ({type, pagination}) => (props = {}) => <Pagination {...props} type={type} {...pagination} />

export default class TypeIndex extends React.Component {

  static propTypes = {
    type: PropTypes.string.isRequired
  }

  render () {
    const { type } = this.props
    const Template = templates[type]
    if (!Template) return null
    return (
      <Template renderPagination={renderPagination(this.props)} {...this.props} />
    )
  }

}