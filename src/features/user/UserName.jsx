import { useSelector } from 'react-redux'

export default function UserName() {
    const username = useSelector((store) => store.user.username)

    if (!username) return null

    return (
        <div className="hidden text-sm font-semibold md:block">{username}</div>
    )
}
