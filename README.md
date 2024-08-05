npm create vite@latest app_name
cd  app_name
npm install
npm i @reduxjs/toolkit react-redux axios

echo "# redux_toolkit_ericson" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/perlov3301/redux_toolkit_ericson.git
git push -u origin main

redux#8
writing Thunks for action as:
 "loading" spiner,request "succeeded","request failed" 
  const thunkFunction = (dispatch, getState) => {
    // dispatctch of  a function
    // getState of a value
 }
  store.dispatch(thunkFunction);

 //fetchById is the "thunk action creator"
  export const fetchById = (todoId) => async dispatch  {
//fetch by Id Thunk is the "thunk function"
     return async function 
       fetchByIdThunk(dispatch, getState) {
        const response = await client.get(`/someApi/todo/${todoId}`);
       }
 }
 function ToDoComponent ({ todoId }) {
    const dispatch = useDispatch();
    cosnt onFetchClicked = () => {
        dispatch(fetchById(todoId))
    };
 }

 *from youtube
 export 
   const fetchById=createAsyncThunk('todosfetchById');
const response = await client.get('/someApi/todoId');
return response.todos;
{})
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    //omit reducer cases
  },
  extraReducers: builder => {
    builder
    .addCase(fetchById.pending, (state,action)=>{
      state.status = 'loading'
    })
    .addCase(fetchById.fulfilled, (state,action)=> {
      const newEntities = {};
      action.payload.forEach(todo=>{
        newEntities[todo.todoId]=todo
      })
      state.entities = newEntities;
      state.status = 'idle';
    })
  }
});
rtk query overview
Dogs as servis