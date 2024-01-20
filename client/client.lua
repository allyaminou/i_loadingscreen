if !Config.UseESX then
    local ClientLoadESX = false

    AddEventHandler("playerSpawned", function ()
        if not ClientLoadESX then
            ShutdownLoadingScreenNui()
            ClientLoadESX = true
        end
    end)
end