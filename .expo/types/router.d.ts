/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/(tabs)/guide` | `/(tabs)/styles` | `/_sitemap` | `/explore` | `/features/movies/movie` | `/features/movies/movies_actions` | `/features/movies/movies_reducer` | `/features/movies/screens/movie_detail` | `/features/movies/screens/popular_movies` | `/guide` | `/root_reduces` | `/store` | `/styles`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
