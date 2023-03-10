import users from '../src/data/users.json';

const refs = {
  cardsList: document.querySelector('.cards-list'),
  cardBtnFollow: document.querySelector('.card-btn'),
};

let following = [];
let user = [];
function followerFormat(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function checkFollowing(id) {
  return following.includes(id) ? 'following' : 'follow';
}

const renderCard = () => {
  const followingLocal = JSON.parse(localStorage.getItem('following'));
  const usersLocal = JSON.parse(localStorage.getItem('users'));

  following = followingLocal ? followingLocal : [];
  user = usersLocal ? usersLocal : users;

  refs.cardsList.innerHTML = criateCards();
};

const criateCards = () => {
  return user
    .map(
      ({ id, tweets, followers, avatar }) =>
        `<li class="card" data-id=${id} data-state="follow">
        <div class="card-avatar">
                <div class="card-img">
                    <img src=${avatar} alt=""/>
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

const follow = e => {
  const target = e.target;
  if (target.classList.contains('card-btn')) {
    const id = Number(target.dataset.id);
    const user = users.find(el => el.id === id);

    if (following.includes(id)) {
      user.followers -= 1;
      following.splice(following.indexOf(id), 1);
    } else {
      user.followers += 1;
      following.push(id);
    }

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('following', JSON.stringify(following));

    renderCard();
  }
};

document.body.addEventListener('click', follow);

renderCard();
