package com.shenith.sampleserver.DAO;


import com.shenith.sampleserver.Models.Wallpaper;
import com.shenith.sampleserver.Services.WallpaperService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WallpaperDAO extends JpaRepository<Wallpaper,Integer> {


    List<Wallpaper> findByWallpaperNameContainingIgnoreCase(String searchKey);
}
