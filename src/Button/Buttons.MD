# Let's create a  Button component. 

It should follow next conditions:

- It should be polymorphic (button or link)
- There are 4 types
   - Text Button 
     1. can be 'small' | 'large' 
     2. text should be sent as a prop
     3. no children
   - Icon Button
     1. can be 'small' | 'medium' | 'large';
     2. should contain icon
     3. supports several variants 'plain'| 'outline'| 'destructive'
     4. no children
   - Default Button
     1. can be 'small' | 'medium' | 'large';
     2. supports several variants 'primary' |'secondary' | 'destructive'
     3. no children
   - Blank button
     1. has children 
- all props should be checked with TS
- ref should work correctly with TS
