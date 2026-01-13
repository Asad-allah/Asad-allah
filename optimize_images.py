from PIL import Image
import os

def optimize_image(input_path, output_path, quality=80):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        print(f"Processing {input_path}...")
        with Image.open(input_path) as img:
            # Resize if too huge (max 2000px width)
            if img.width > 2000:
                ratio = 2000 / img.width
                new_size = (2000, int(img.height * ratio))
                img = img.resize(new_size, Image.Resampling.LANCZOS)
                print(f"Resized to {new_size}")

            # Save as WebP
            img.save(output_path, "WEBP", quality=quality, optimize=True)
            
            old_size = os.path.getsize(input_path) / (1024*1024)
            new_size = os.path.getsize(output_path) / (1024*1024)
            print(f"Done! {old_size:.2f}MB -> {new_size:.2f}MB")

    except Exception as e:
        print(f"Error: {e}")

# Optimize Hero
optimize_image("src/assets/hero_v2.png", "src/assets/hero_opt.webp", quality=75)
