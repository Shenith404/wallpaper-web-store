package com.shenith.sampleserver.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.query.sql.internal.ParameterRecognizerImpl;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "wallpaper")
public class Wallpaper {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private  String wallpaperName;
    private String wDescription;
    private  int userId;
    private String category;

}
