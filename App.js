import ChatScreen from './ChatScreen';
import React from "react";
import { Platform, KeyboardAvoidingView, Image } from "react-native";

import CommentSection from "./CommentSection";

export default function App() {
  return  (
   <KeyboardAvoidingView
   style ={{flex: 1}}
   behavior={Platform.OS ==="ios" ? "padding" : "height"}
   >
     <Image
     source={require ('./assets/expogopik.jpeg')}
     
     style={{width:450, height:350}}
     />
<ChatScreen />
<CommentSection />

</KeyboardAvoidingView>
);
  
}