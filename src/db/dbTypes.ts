export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          likes: number
          post_id: string
          views: number
        }
        Insert: {
          likes?: number
          post_id: string
          views?: number
        }
        Update: {
          likes?: number
          post_id?: string
          views?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment_views: {
        Args: {
          postid: string
        }
        Returns: number
      }
      increment_likes: {
        Args: {
          postid: string
        }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
