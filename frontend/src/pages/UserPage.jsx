import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1000}
        replies={510}
        postImg="/post1.png"
        postTitle="Let's talk about threads"
      />
      <UserPost
        likes={2100}
        replies={1110}
        postImg="/post2.png"
        postTitle="Instagram concurent"
      />
      <UserPost
        likes={500}
        replies={71}
        postImg="/post3.png"
        postTitle="Corbette C7"
      />
      <UserPost likes={80} replies={9} postTitle="Z06 vs the world" />
    </>
  );
};

export default UserPage;
