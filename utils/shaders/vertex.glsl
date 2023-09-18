varying vec2 vUv;

void main(){
  vUv = uv;
  vec3 newposition = position;
  float distanceFromCenter = abs(
      (modelMatrix * vec4(position, 1.0)).y
  );

  newposition.x *= 1.0 + 0.2*pow(distanceFromCenter, 2.0);
    
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.0);
}