import React from 'react';

const authContext = React.createContext({ // domyślna wartośc gdy nie ma value w TAgu kontekstu
	authenticated : false, 
	login: () => {}
});
// musi oplatać całą część aplikacji kóra ma kożystać z kontekstu
export default authContext;