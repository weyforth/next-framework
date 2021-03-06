import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <a>
      {props.title}
    </a>
    </Link>
  </li>
)

export default () => (
  <div>
    <Link href='/about'> About
    </Link>
    <h1>My Blog</h1>
    <ul>
      <PostLink id='hello-nextjs' title='Hello Next.js' />
      <PostLink id='learn-nextjs' title='Learn Next.js is awesome' />
      <PostLink id='deploy-nextjs' title='Deploy apps with Zeit' />
    </ul>
  </div>
)

// import React from 'react'
// import PropTypes from 'prop-types'
// import '../css/styles.scss'
// import { connect } from 'react-redux'
// import { fetchUsers } from '../lib/actions/user'
// import Header from '../components/header'
//
// class Index extends React.Component {
//
//   static propTypes = {
//     users: PropTypes.array,
//     onComponentWillMount: PropTypes.func
//   }
//
//   static defaultProps = {
//     users: []
//   }
//
//   componentWillMount () {
//     const { onComponentWillMount } = this.props
//     onComponentWillMount && onComponentWillMount()
//   }
//
//   static getInitialProps ({store, isServer, pathname, query}) {
//     console.logo
//     const action = fetchUsers()
//     store.dispatch(action)
//     return action.payload.then(payload => {
//       return {
//         users: payload.data
//       }
//     })
//   }
//
//   render () {
//     const { users } = this.props
//     return (
//       <div>
//         <Header />
//         <p>
//           <ul>
//             {users.map((user, i) => (
//                <li key={i}>
//                  {user.name}
//                </li>
//              ))}
//           </ul>
//         </p>
//       </div>
//     )
//   }
//
// }
//
// const mapStateToProps = state => ({
//   users: state.users.items
// })
//
// const mapDispatchToProps = dispatch => ({
//   // onComponentWillMount: () => {
//   //   dispatch(fetchUsers())
//   // }
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Index)
