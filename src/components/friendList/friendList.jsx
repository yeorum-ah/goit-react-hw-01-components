import { FriendsList,ListItem } from "./friendList-styled";

export const FriendList = ({friends}) => {
    return <FriendsList className="friend-list">{friends.map(({id, isOnline, avatar, name }) => {
      const color = isOnline ? "green": "red";
        return <ListItem className="item" key={id}>
        <span className="status" style = {{
                    background: color,
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%"
                }}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </ListItem>
    })}</FriendsList>
}