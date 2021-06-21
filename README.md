# Player Archive!

<img src="./readmeAssets/preview.png?raw=true" alt="preview" width="400"/>
<img src="./readmeAssets/preview-2.png?raw=true" alt="preview" width="400"/>
<img src="./readmeAssets/preview-mobile.png?raw=true" alt="preview" width="400"/>
<img src="./readmeAssets/preview-tablet.png?raw=true" alt="preview" width="400"/>
<img src="./readmeAssets/preview-5.png?raw=true" alt="preview" width="400"/>



## Note For Reviewer 🙏🏻

The frontend application has been engineered to mimic code design and architecture of a production scale app. 
The feature requested may be straightforward, but my goal is to project this feature as a slice of a larger application.

## Features 📝

 - A Search Input to search for Players stored in archive by their ID and only show **active** players, using two APIs
	 - `/player/data/:playerId` - to check if it's active/inactive.
	 - `/player/profile/:playerId` - to get full data.
	 
 - Mobile + Tablet Responsive + Highly Modular Frontend.
 - Lean NodeJS backend to serve the json data.
 - Unit Tests.
 - Bonus Features: 
	 - Dark Mode Support 🌙🌚 
	 - `stale-while-revalidate` data fetching

## How to run the application(s)

 - Please use node `v12.19.0` and npm `v6.14.8`. I could have shipped a docker image but ... ☕.
 - Clone the repo of course 😉
 - `npm i` 
 - `npm run fullstack` to fire off both frontend and backend concurrently. (I used `concurrently` npm package).
 - Alternatively 💅, `npm run frontend` for frontend and `npm run backend` for backend.
 - **Frontend** : `http://localhost:3000` 
 - **Backend** : `http://localhost:3001` 
 - Data can be looked up [here]('./server/data/player.json')




## Frontend TechStack


 - **React** : Setup using an `ejected` Create React Application to have more control over webpack. I have only added `aliases` for better path management as of now.
 - **React-Redux**, State Management Library : The feature could easily be implemented without a state management library, but as mentioned above, the goal is to project the feature as a slice of a larger application.
 - **Material-UI**: For CSS-In-JS, Theme management, Responsiveness, and Re-usable UI Components. **Note**: Except for *TextField* Search Input, rest of the UI components have been developed in this application. A larger application always uses a design system underneath and every design system (bootstrap, ANT, Material-ui etc)  has helper libraries to manage boilerplate. I've documented under-the-hood implementations of these helper utils as a means to communicate I'm well aware of these concepts but just not reinventing the wheel at the moment. 
 -  **Axios**: For ajax
 - **Reselect**: Selector Library for memoization.
 - **redux-actions**: For Enforcing FSA Compliance in redux actions.
 - **babel/plugin-proposal-export-default-from**: For `export x from 'y';`
 -  **babel/plugin-proposal-async-generator-functions**: For `async await` in older browsers.
 - **React Testing Library + Jest**


## Backend TechStack

 - **Express + NodeJS**: The most common NodeJS REST framework.
	 - `compression`: For on-the-fly gzip compression.
	 - `cors`: For Allowed-Origin-Access-Control as *.
	 - `http-status`: For All HTTP Status Constants 
 - **Winston**:  For logging purposes. Currently only logging on Console but can use any other Transport mechanism in a larger application. (LogStash perhaps 😉)
 - **Just JSON Files for persistence layer**: Well, I could go all the way with PSQL/MongoDB etc, but should I? Please let me know.

## Frontend Architecture


**From Root Node to a Page's Container Component:**
<img src="./readmeAssets/FA-1.png?raw=true" alt="preview" width="500"/>


**Directory Structure using Ducks**

<img src="./readmeAssets/FA-2.png?raw=true" alt="preview" />




## Backend Architecture

**Directory Structure**
<img src="./readmeAssets/BE-1.png?raw=true" alt="preview" />
