rm -r -f published
dotnet publish src/AspNetCore22/AspNetCore22.csproj -c Release -o published -p:PublishTrimmed=true -r win-x64