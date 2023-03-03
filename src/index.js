import users from './data/users.json';

const createUserList = () => {
  return usersData
    .map(
      ({ id, user, tweets, followers, avatar }) =>
        `<li class="card" data-id=${id} data-state="follow">
            <div class="card-avatar">
                <div class="card-img">
                    <img src=${avatar}  alt="${user}" />
                </div>
            </div>
            <p class="card-tweets">${tweets} tweets</p>
            <p class="card-followers">${followerFormat(followers)} followers</p>
            <button type="button" class="card-btn" data-state=${checkFollowing(
              id
            )} data-id=${id}>${checkFollowing(id)}</button>
         </li>`
    )
    .join('');
};