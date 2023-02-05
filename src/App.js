import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CatAndDogPage, CommentsPage, NotFoundPage, PostsPage} from "./pages";

const App = () => {
  return (
      <div>

          <Routes>
              <Route path={'/'} element={<MainLayout/>}>
                  <Route index element={<PostsPage/>}/>
                  <Route path={'comments'} element={<CommentsPage/>}/>
                  <Route path={'catAndDog'} element={<CatAndDogPage/>}/>
              </Route>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Routes>
      </div>
  );
}

export {App}
